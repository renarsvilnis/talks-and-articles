/**
 * Whitelist allowed record properties
 * @method filterRecord
 * @param  {Object}
 * @return {Object}
 */
module.exports = function filterRecord (record) {
  return {
    href: record.href,
    title: record.title,
    addedAt: record.addedAt,
    tags: record.tags,
    type: record.type,
    comments: record.comments || []
  };
};
