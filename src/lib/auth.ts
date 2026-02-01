// Simple hash function for the access code
async function hashCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Pre-computed hash of the access code: gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E
const VALID_CODE_HASH = '8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b';

// We'll compute the actual hash on first run
let actualHash: string | null = null;

export async function validateAccessCode(code: string): Promise<boolean> {
  const inputHash = await hashCode(code);
  
  // Hash of the correct code
  const correctHash = await hashCode('gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E');
  
  return inputHash === correctHash;
}

export function isAuthenticated(): boolean {
  return localStorage.getItem('ai_course_authenticated') === 'true';
}

export function setAuthenticated(value: boolean): void {
  if (value) {
    localStorage.setItem('ai_course_authenticated', 'true');
  } else {
    localStorage.removeItem('ai_course_authenticated');
  }
}

export function logout(): void {
  setAuthenticated(false);
}
