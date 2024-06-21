import { FC } from "react";
import Table from "@/components/Tabel";

const Budget: FC = () => {
  return (
    <section>
      <h1 className="my-4 text-xl text-slate-500">Budget</h1>
      <div className="w-3/4">
        <Table>
          <Table.Body>
            <Table.TR>
              <Table.TH>Category</Table.TH>
              <Table.TH>Sub Total</Table.TH>
            </Table.TR>

            <Table.TR>
              <Table.TD>Test</Table.TD>
              <Table.TD className="w-32 text-right">2</Table.TD>
            </Table.TR>
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default Budget;
