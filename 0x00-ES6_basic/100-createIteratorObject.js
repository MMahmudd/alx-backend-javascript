export default function createIteratorObject(report) {
  return (function* _() {
    // disablenext line no restrictionSyntax
    for (const department of Object.values(report.allEmployees)) {
      // disablenext line norestricted syntax
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}
