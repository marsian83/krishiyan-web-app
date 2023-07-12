export function extractCodeFromDriveLink(url: string): any {
    const pattern = /\/d\/([a-zA-Z0-9_-]+)\//;
    const match = url.match(pattern);
    return match && match[1];
  }
  
//   \<img src={extractCodeFromDriveLink(image)} />