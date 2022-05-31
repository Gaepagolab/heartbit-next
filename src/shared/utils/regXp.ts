export const regXp = {
  containLowercase: createRegXp(/(?=.*[a-z])/),
  containUpppercase: createRegXp(/(?=.*[A-Z])/),
  containSpecialCharacter: createRegXp(
    /(?=.*[\^$*.[\]{}()?\-“!@#%&/,><’:;|_~`])/
  ),
};

export function createRegXp(regex: RegExp) {
  return new RegExp(regex);
}
