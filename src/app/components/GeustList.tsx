import { FC } from "react";
import Table from "@/components/Tabel";

const GuestList: FC = () => {
  return (
    <section>
      <h1 className="my-4 text-xl text-slate-500">Guest List</h1>
      <div>
        <Table>
          <Table.Body>
            <Table.TR>
              <Table.TH className="w-2/4">Name</Table.TH>
              <Table.TH>Invititaion</Table.TH>
              <Table.TH>Attending</Table.TH>
              <Table.TH>Thank You</Table.TH>
            </Table.TR>

            <Table.TR>
              <Table.TD>Dan</Table.TD>
              <Table.TD className="text-center">
                <input type="checkbox" />
              </Table.TD>
              <Table.TD className="text-center">
                <input type="checkbox" />
              </Table.TD>
              <Table.TD className="text-center">
                <input type="checkbox" />
              </Table.TD>
            </Table.TR>
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

export default GuestList;
