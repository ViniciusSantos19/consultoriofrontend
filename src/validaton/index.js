export const validateForm = (group, requiredFields) => {
  const errors = {};
  console.log(group);
  requiredFields.forEach((field) => {
    if (!group[field]) {
      errors[field] = `O campo ${field} é obrigatório`;
    }
  });

  return errors;
};
