import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#FF00FF", color: "#000000" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Ritual © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
