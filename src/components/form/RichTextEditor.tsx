import { 
  Editable,
  withReact,
  Slate,
  ReactEditor,
  RenderLeafProps,
  RenderElementProps
}
from "slate-react";

import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element,
  BaseEditor,
} 
from "slate"

import React, { useCallback, useMemo, useState } from "react";

import { withHistory } from "slate-history";

import { stitches } from "stitches";

import {
  Toolbar as PrimitiveToolbar,
  ToggleItem as PrimitiveToggleItem,
  ToggleGroup as PrimitiveToggleGroup,
}
from "@radix-ui/react-toolbar";

import {
  buttonGroup,
  iconButtonContainer,
  iconButtonIconContainer
}
from "mixins";

import {
  FontBoldIcon,
  UnderlineIcon,
  FontItalicIcon,
  StrikethroughIcon,
} 
from "@radix-ui/react-icons";



const customElementTypes = [
  "paragraph",
  "list-item",
  "ordered-list" ,
  "unordered-list"
] as const;

type CustomText = { 
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

type BaseCustomElement = {
  children: CustomText[];
}

type CustomElement = BaseCustomElement & {
  type: (typeof customElementTypes)[number];
};

declare module "slate" {
  interface CustomTypes {
    Editor: (
      BaseEditor 
      & ReactEditor
    );
    Element: CustomElement
    Text: CustomText;
  }
}


const Toolbar = stitches.styled(PrimitiveToolbar, {});

const ToggleItem = stitches.styled(PrimitiveToggleItem, iconButtonContainer);

ToggleItem.displayName = "ToggleItem";

const ToggleItemIcon = stitches.styled("span", iconButtonIconContainer);

ToggleItemIcon.displayName = "ToggleItemIcon";

const ToggleGroup = stitches.styled(PrimitiveToggleGroup, buttonGroup);

ToggleGroup.displayName = "ToggleGroup";


const icons = [
  {
    name: "bold",
    Component: FontBoldIcon,
  },
  {
    name: "underline",
    Component: UnderlineIcon
  },
  {
    name: "italic",
    Component: FontItalicIcon,
  },
  {
    name: "strikethrough",
    Component: StrikethroughIcon
  }
];

export const RichTextEditor: React.FC = () => {

  const [state, setState] = useState<Descendant[]>([
    {
      type: "paragraph",
      children: [
        {
          text: "abra isma"
        }
      ],
    },
  ]);

  const { editor, controller } = useRichTextEditorController();

  const keyboardHandler = useRichTextEditorKeyboardHandler(controller);

  const renderElement = useCallback<(props: RenderElementProps) => JSX.Element>(props => <RenderElement {...props}/>, []);

  const renderLeaf = useCallback<(props: RenderLeafProps) => JSX.Element>(props => <RenderLeaf {...props}/>, []);

  const markToggleGroupValue = Object.entries(controller).map(([key, { isActive }]) => isActive() ? key : null).filter(value => !!value) as string[];

  return (
    <Slate 
    editor={editor}
    value={state}
    onChange={setState}>
      <div>
        <Toolbar>
          <ToggleGroup
          
          
          type="multiple">
            {icons.map(({ name, Component }) => (
              <ToggleItem 
              onClick={() => {
                controller[name as keyof typeof controller].toggle();
              }}
              key={name}
              value={name}
              variant="text">
                <ToggleItemIcon>
                  <Component/>
                </ToggleItemIcon>
              </ToggleItem>
            ))}
          </ToggleGroup>
        </Toolbar>
        
        <Editable
        onKeyDown={keyboardHandler}
        renderLeaf={renderLeaf}
        renderElement={renderElement}/>
      </div>
    </Slate>
  );
}



const richTextEditorController = (editor: Editor) => {

  type MarkTypes = keyof Omit<CustomText, "text">;

  const markMedthos = (type: MarkTypes) => {

    const isActive = (): boolean => {

      const marks = Editor.marks(editor);
  
      if (!marks) {
  
        return false;
      }
      
      return !!marks[type];
    };

    const set = (value: boolean): void => {

      if (value) {
        
        Editor.addMark(editor, type, true);
      }
      else {
  
        Editor.removeMark(editor, type);
      }
    }

    const toggle = (): void => set(!isActive());

    return {
      isActive,
      set,
      toggle
    };
  }

  /*
  type BlockTypes = CustomElement["type"];

  const blockMethods = (type: BlockTypes) => {

    const isActive = (): boolean => {
      
      const { selection } = editor
      
      if (!selection) return false
    
      const [match] = Array.from(
        Editor.nodes(editor, {
          at: Editor.unhangRange(editor, selection),
          match: node => (
            !Editor.isEditor(node) &&
            Element.isElement(node) &&
            node.type === type
          )
        })
      )
    
      return !!match
    }

    const set = (value: boolean): void => {

      

      Transforms.unwrapNodes(editor, {
        match: node => (
          !Editor.isEditor(node) &&
          Element.isElement(node) &&
          customElementTypes.includes(node.type)
        ),
        
      });

      if (value) {
      }
      else {
        
      }
    }

    return {
      isActive,
      set
    };
  }
  */

  return {
    bold: markMedthos("bold"),
    italic: markMedthos("italic"),
    underline: markMedthos("underline"),
    strikethrough: markMedthos("strikethrough"),
    // orderedList: blockMethods("ordered-list"),
    // unorderedList: blockMethods("unordered-list")
  };
}

function useRichTextEditorController() {

  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const controller = richTextEditorController(editor);

  return {
    editor,
    controller
  };
}

function useRichTextEditorKeyboardHandler(controller: ReturnType<typeof richTextEditorController>) {

  return (event: React.KeyboardEvent<HTMLDivElement>) => {

    if (event.ctrlKey && event.key === "b") {
      
      controller.bold.toggle();

      event.preventDefault();
    }

    if (event.ctrlKey && event.key === "u") {

      controller.underline.toggle();

      event.preventDefault();
    }

    if (event.ctrlKey && event.key === "s") {

      controller.strikethrough.toggle();

      event.preventDefault();
    }

    if (event.ctrlKey && event.key === "i") {

      controller.italic.toggle();

      event.preventDefault();
    }
  }
}



const UnorderedList = stitches.styled("ul", {});

const OrderedList = stitches.styled("ol", {});

function RenderElement({ attributes, children, element }: React.PropsWithChildren<RenderElementProps>) {

  return ({
    paragraph: (
      <div 
      {...attributes}>
        {children}
      </div>
    ),
    "list-item": (
      <li 
      {...attributes}>
        {children}
      </li>
    ),
    "ordered-list": (
      <OrderedList 
      {...attributes}>
        {children}
      </OrderedList>
    ),
    "unordered-list": (
      <UnorderedList 
      {...attributes}>
        {children}
      </UnorderedList>
    ),
  }[element.type]);
}



const Bold = stitches.styled("b", {
  fontWeight: 800
});

const Italic = stitches.styled("i", {
  fontStyle: "italic"
});

const Underline = stitches.styled("span", {
  textDecorationLine: "underline"
});

const Strikethrough = stitches.styled("span", {
  textDecorationLine: "line-through"
});

function RenderLeaf({ attributes, children, leaf }: React.PropsWithChildren<RenderLeafProps>) {

  if (leaf.bold) {

    children = (
      <Bold 
      {...attributes}>
        {children}
      </Bold>
    );
  }

  if (leaf.italic) {

    children = (
      <Italic 
      {...attributes}>
        {children}
      </Italic>
    );
  }
    
  if (leaf.underline) {

    children = (
      <Underline 
      {...attributes}>
        {children}
      </Underline>
    );
  }

  if (leaf.strikethrough) {

    children = (
      <Strikethrough 
      {...attributes}>
        {children}
      </Strikethrough>
    );
  }

  return (
    <span 
    {...attributes}>
      {children}
    </span>
  );
};