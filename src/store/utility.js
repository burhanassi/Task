export  const  updateObject = (oldObject, updatedProperites) => {
    return {
        ...oldObject,
        ...updatedProperites
    };
};
