export const blobToBase64 = (blob: Blob) => new Promise<string>((resolve, reject) => {
    
    const reader = new FileReader;
    
    reader.onerror = () => reject();
    
    reader.onload = () => {
        
        if (typeof reader.result !== "string") {
            
            return reject();
        }

        resolve(reader.result);
    };
    
    reader.readAsDataURL(blob);
});

export const base64ToUrl = async (base64: string): Promise<string> => {

    const res = await fetch(base64);

    const blob = await res.blob();

    return URL.createObjectURL(blob);
}