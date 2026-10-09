import { randomBytes, scryptSync } from "node:crypto";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const readline = createInterface({ input: stdin, output: stdout });

try {
  const password = await readline.question("Enter the friends-only comment password: ");

  if (password.length < 12) {
    throw new Error("Choose a password/passphrase with at least 12 characters.");
  }

  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");

  console.log("\nAdd these values to your Vercel Environment Variables. Never commit them:");
  console.log(`COMMENT_PASSWORD_SALT=${salt}`);
  console.log(`COMMENT_PASSWORD_HASH=${hash}`);
  console.log("\nThe password itself is not printed or saved.");
} finally {
  readline.close();
}
