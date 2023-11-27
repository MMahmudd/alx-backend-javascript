export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // elintdisable nextline restrictedSyntax
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
