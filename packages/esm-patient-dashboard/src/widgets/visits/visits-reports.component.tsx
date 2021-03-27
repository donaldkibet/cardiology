import {
  Button,
  DataTable,
  DataTableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "carbon-components-react";
import { t } from "kremling";
import React from "react";
import styles from "./visits-report.component.scss";
import { getAllVisits } from "./visits.resource";

const VisitReports: React.FC = () => {
  const [allVisits, setAllVisits] = React.useState([]);

  React.useEffect(() => {
    const sub = getAllVisits().subscribe((response) => {
      // eslint-disable-next-line no-console
      const final = response.filter((result) => {
        return (
          result.visitType.uuid === "e89b4b06-8d7a-40e6-b5ad-d3209f47040b" ||
          result.visitType.uuid === "3ca05104-3ada-4d97-bab7-292d91ce3160"
        );
      });
      setAllVisits(final);
    });
  }, []);

  const tableHeaders = [
    { key: "name", header: "Name" },
    { key: "gender", header: "Gender" },
    { key: "age", header: "Age" },
    { key: "visitType", header: `Visit Type` },
  ];

  const tableRows = allVisits.map((visit, index) => {
    return {
      id: `${index}`,
      name: String(visit.patient.person.display),
      gender: String(visit.patient.person.gender),
      age: String(visit.patient.person.age),
      visitType: String(visit.visitType.display),
    };
  });

  return (
    <div className={styles.formsWidgetContainer}>
      <div className={styles.formsHeaderContainer}>
        <h4 className={`${styles.productiveHeading03} ${styles.text02}`}>
          Todays Visits
        </h4>
      </div>
      <div>
        {tableRows && (
          <TableContainer>
            <DataTable
              rows={tableRows}
              headers={tableHeaders}
              isSortable={true}
              size="short"
            >
              {({ rows, headers, getHeaderProps, getTableProps }) => (
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader
                          className={`${styles.productiveHeading01} ${styles.text02}`}
                          {...getHeaderProps({
                            header,
                            isSortable: header.isSortable,
                          })}
                        >
                          {header.header?.content ?? header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id}>
                            {cell.value?.content ?? cell.value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={4}>
                        <b>Total Visits : {tableRows.length}</b>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              )}
            </DataTable>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default VisitReports;
