


export const BuildListBase = (fromYear=1900,toYear=2022)=>{
  const months = ['January','February','March', 'April','May', 'June', 'July','August','September','October','November','December'];
  let templateList = [{},{}];

  for(let year=fromYear;year <= toYear;year++){
    templateList[0][String(year)] = [];
  }
  for(let month of months){
    templateList[1][month] = [];
  }
  return templateList;
}

const BuildFilterList = (expenses, filterList)=>{

  //Connvert to JSON string and back to deep copy array.
  const tmpFilterList = (filterList) ? JSON.parse(JSON.stringify(filterList)) : BuildListBase();
  for(let expense of expenses){
    const year = expense.dateBought.getFullYear();
    const month = expense.dateBought.toLocaleString('en-US', {month: 'long'});
    tmpFilterList[0][year].push(expense.id);
    tmpFilterList[1][month].push(expense.id);
  }
  return tmpFilterList;
}

export const FilterRelevent = (filterList)=>{
  let [years, months] = JSON.parse(JSON.stringify(filterList));
  const yearKeys = Object.keys(years);
  const monthKeys = Object.keys(months);
  for(let year of yearKeys){
    if(years[year].length == 0){
      delete years[year];
    }
  }
  for(let month of monthKeys){
    if(months[month].length == 0){
      delete months[month];
    }
  }
  return [years,months];
}

export default BuildFilterList;
