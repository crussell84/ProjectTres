import React from "react";
import { Icon, Button, Input } from "react-materialize";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div>
      <div className="market-nav">
        <p>ENT3RPRISE</p>

        <div id="search">
          <Input placeholder="Search" />
          <Icon>search</Icon>
        </div>

        <div className="nested-grid">
        <a id="cart"><Link to="/cart"><Icon>shopping_cart</Icon></Link></a>
      
          <a id="profile" href="get-started.html">
            <Icon>perm_identity</Icon>
          </a>

          <Button className="button" onClick={props.signOut}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
