import React, { useContext } from "react";
import { Context } from "../../context/Context";
import styles from "./Purchases.module.css";
import PurchasesRow from "./PurchasesRow";

const Purchases = () => {
  const [purchaseData, setPurchaseData, statusVisible, setStatusVisible] =
    useContext(Context);

  //const [purchaseData, statusVisible, setStatusVisible] = useContext(Context);
  //console.log(purchaseData, setPurchaseData, statusVisible, statusVisible);
  console.log(setPurchaseData);
  const openIndicators = (e) => {
    e.preventDefault();
    // setIndicatorsData([
    //   {
    //     code: "RI-PS-006",
    //     description:
    //       "Short or inadequate notice to bidders to submit expressions of interest or bids",
    //     cases: 2,
    //   },
    //   {
    //     code: "RI-PS-003",
    //     description: "Splitting purchases to avoid procurement thresholds",
    //     cases: 1,
    //   },
    //   {
    //     code: "RI-PS-005",
    //     description:
    //       "Direct awards in contravention to the provisions of the procurement plan",
    //     cases: 7,
    //   },
    // ]);
    setStatusVisible({
      ...statusVisible,
      indicators: true,
      purchases: false,
    });
  };

  return (
    <div className={styles.splitPurchases}>
      <h2 className={styles.splitPurchases__h2}>
        <span>Splitting purchases to avoid procurement thresholds</span>
        <a
          href="/"
          onClick={openIndicators}
          className={styles.splitPurchases__link}
        >
          RI-PS-04
        </a>
      </h2>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs__link}>
          <a href="/indicators" onClick={openIndicators}>
            Indicators
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
          >
            <line
              x1="0.646447"
              y1="11.6464"
              x2="5.64645"
              y2="6.64645"
              stroke="#9B3C86"
            />
            <line
              x1="0.353553"
              y1="0.646447"
              x2="6.35355"
              y2="6.64645"
              stroke="#9B3C86"
            />
          </svg>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>OCID</td>
            <td>Method</td>
            <td>CPV Class</td>
            <td>Expected value</td>
            <td>Current status</td>
          </tr>
        </thead>
        <tbody>
          <PurchasesRow purchaseData={purchaseData} />
        </tbody>
      </table>
    </div>
  );
};

export default Purchases;
