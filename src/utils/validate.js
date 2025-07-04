export const validate = (email, password) => {
  const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isValidPassword = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])\S{6,}$/.test(password);
  if (!isValidEmail) return "Enter a Valid Email !";
  if (!isValidPassword) return "Enter a Strong Password !";
};
