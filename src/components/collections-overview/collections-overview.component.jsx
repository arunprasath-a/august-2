import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {selectCollections} from "./../../redux/shop/shop.selector";

import CollectionPreview from "./../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <React.Fragment>
      <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
  })

export default connect(mapStateToProps)(CollectionsOverview);
