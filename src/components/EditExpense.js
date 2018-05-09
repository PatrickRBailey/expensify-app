import React from 'react';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      This is from the edit expense page for id {props.match.params.id}
  </div>
  );
};

export default EditExpense;
