import React from "react";

const JMTReport: React.FC = () => {
  const jmtData = [
    { batch: "01", strength: 13 },
    { batch: "02", strength: 32 },
    { batch: "03", strength: 26 },
    { batch: "04", strength: 22 },
    { batch: "05", strength: 14 },
    { batch: "06", strength: 22 },
    { batch: "07", strength: 15 },
    { batch: "08", strength: 2 },
    { batch: "09", strength: 4 },
    { batch: "10", strength: 31 },
    { batch: "11", strength: 21 },
    { batch: "12", strength: 7 },
  ];

  const totalStrength = jmtData.reduce((sum, item) => sum + item.strength, 0);

  return (
    <div className="contaoner mx-auto py-8 lg:px-12 px-8 bg-black">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-green-600 mb-4">No. of JMT’s passed out</h2>
      <ul className="list-none space-y-1 mb-6">
        <li className="text-green-600">
          ✅ No. of training modules:{" "}
          <span className="font-bold text-white">English-84, Hindi-74</span>
        </li>
        <li className="text-green-600">
          ✅ No. of SOP’s created: <span className="font-bold text-white">50+</span>
        </li>
        <li className="text-green-600">
          ✅ No. of Saksham candidates created with pictures:{" "}
          <span className="font-bold text-white">Retail-22, Healthcare-32</span>
        </li>
      </ul>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-green-700 w-full text-center">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-green-700 px-4 py-2">JMT Batch Number</th>
              {jmtData.map((item) => (
                <th key={item.batch} className="border border-green-700 px-2 py-2">
                  {item.batch}
                </th>
              ))}
              <th className="border border-green-700 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="border border-green-700 px-4 py-2 font-semibold">
                Strength during Joining
              </td>
              {jmtData.map((item) => (
                <td key={item.batch} className="border border-green-700 px-2 py-2">
                  {item.strength}
                </td>
              ))}
              <td className="border border-green-700 px-4 py-2 text-white font-bold">
                {totalStrength}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JMTReport;
