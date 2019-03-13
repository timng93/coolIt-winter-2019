export const formatSessionData = activites => {
  return activites.reduce((acc, curr) => {
    const activity = acc.find(section => section.title === curr.category.name);
    activity
      ? activity.data.push(curr)
      : acc.push({title: curr.category.name, data: [curr]});
    return acc;
  }, []);
};