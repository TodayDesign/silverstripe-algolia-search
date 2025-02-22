import $ from "jquery";
import algoliaAction from "./search-action";

const algoliasearch = require("algoliasearch");

export default function() {
  let client;
  let index;

  $(document).ready(() => {
    loadDetails(getConfig());
  });

  function loadDetails(config) {
    client = algoliasearch(config.applicationID, config.apiKey);
    index = client.initIndex(config.indexName);
  }

  $(".algolia-search-box").keyup(function() {
    const query = $(this).val();

    algoliaAction().indexSearch(query, index);
  });
}
