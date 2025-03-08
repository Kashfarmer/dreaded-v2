/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "233";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'kashfarmer';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhhSnFEY2w4VEdPSDdqUUgvRkJXQmVablpObWJPaUcvVmdnTll6aHJFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnNuRW5PbnFYZ3NVSmRUc0J1Z1NMUk52V2RGdnpaeDVUTGkwK084UVpCOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTTdTUGkwNjdnUC9ER2NTZ3FrNHcxS1ZuVGVQT3dRR21GTElkVnB4aEZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhcFVpaERtTjkvL1ZyTFFkaXJVem02R3RjeUNORElSTExzTkt1RjVEMzJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFZXQ1SkJOa2FNQTg4SnNlRW1kM3JRVkpFZEVRZW1DWnVBd3JGUEVYVVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNZElBYi9DZ0hWcUlwU3RlRUZOcS9DWW5nd2Q3YWRKMFZXaXZVWEJObVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhOV1Q4VURYeVBrcitzb3BhK0NmRDMxcEVxSXY0TnRqbjVyeExsRWtFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjlIY3hCK0lxdEkwcVVwNGpPMjJGMmsyMEM5dll4NVAzREYyUDFXa2pUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUxQXdxVEhPcmdDSlJtSmJVcDhJZVZPdzJTVDEwaTRvOEQvbE5lUG9KWTJVeGxoelFTRys2WUpXRmsrSS9DU2NTMnRHcW1vZ2RLS0dlemY2bDd6QURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IkJDMzlnZWh5OXpocXlISzVBc1hnZnR3azdDaTlCYW9mWkZlTTJJT1RLRm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzMjQwNDgyNDcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU4MTdENjI1RUVFMjVFNUVDNDBGREE4Mjg1ODMzRkYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDE0NzExNjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzI0MDQ4MjQ3MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1OUNEMDE5NjFBRDA3Rjg4NDUxNTJGMkE1RDA0QTI5NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxNDcxMTczfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzMyNDA0ODI0NzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREYzNDMxODYxRjc1Q0VFRTY3MTRENjdCMUZDRTI0RkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTQ3MTE5Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS09GRFBBV1hTai0yZVlYOGZTWEViQSIsInBob25lSWQiOiI2NTNjN2I2MS0wMTNjLTQxNDQtOTNkYS03YWIxMjExMWI3OTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXpXYXZzc3Z2dEdZRzBTclBkV1ZmMGsvRTRnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAyNDB6V2dkMVJIa1hqTzdlSzQ3ZUVhNzNIdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCOTVGUDdKTiIsIm1lIjp7ImlkIjoiMjMzMjQwNDgyNDcyOjY3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikthc2ggRmFybWVyIFNHIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU1NpcVFDRUtiN3NyNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6OHZpNzMwLy9rNXlTZlFuTjFoOGNMVWpkaEVjRml2U3dkOTdEbWZVY3pVPSIsImFjY291bnRTaWduYXR1cmUiOiJ5RU9jcGc3THJ2ay9wTTRQRjNTMG1WVlIzRWVickFvMGh0UXpVVHNwbTdwTU9ORmZFQnRwY00xZEptZnpFSiszUFNXOHhnVllkRTV1VHJLY3g3ZFlBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0xZa25hQVZ0VXNoWHRwTXh3SmFXYlI3NjdjZ2tyUXE1b3JHV2JoVWlJTngrNkZTcFE3WGc2MkJySHZoaU9rMUQxMm1PS3VORndGMDIvelJqNlNwRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNDA0ODI0NzI6NjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYy9MNHU5OVAvNU9ja24wSnpkWWZIQzFJM1lSSEJZcjBzSGZldzVuMUhNMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTQ3MTE1NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOYzUifQ=="
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false;
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
