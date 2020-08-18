export const getVideoList = (searchResult)=>{
    return searchResult ? searchResult.items : [];
};

export const getNextPageToken = (searchResult)=>{
    return searchResult ? searchResult.nextPageToken : '';
};
