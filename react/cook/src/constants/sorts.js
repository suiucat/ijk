const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').resverse(),
  POINTS: list => sortBy(list, 'points').resverse(),
}

export default SORTS;