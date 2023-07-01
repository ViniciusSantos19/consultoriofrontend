export const validateForm = (group, requiredFields) => {
  const errors = {};
  console.log(group);
  requiredFields.forEach((field) => {
    const fieldPath = field.split('.');
    let fieldValue = group;

    for (let i = 0; i < fieldPath.length; i++) {
      const currentField = fieldPath[i];

      if (!fieldValue || !fieldValue[currentField]) {
        errors[field] = `O campo ${field} é obrigatório`;
        break;
      }

      fieldValue = fieldValue[currentField];
    }
  });

  return errors;
};

