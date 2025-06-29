const getSpecificVariable = (variableName: string): string => {
  const variableValue = import.meta.env[variableName];
  // TODO: throw error or handle the case where the variable is not defined
  if (!variableValue) {
    throw new Error(`Environment variable ${variableName} is not defined.`);
  }
  return variableValue;
}

const getMultipleVariables = (variableNames: string[]): Record<string, string> => {
    const ENV: Record<string, string> = {};
    variableNames.forEach(variableName => {
        ENV[variableName] = getSpecificVariable(variableName);
    });
    return ENV;
}


export default getMultipleVariables;
