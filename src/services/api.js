import Axios from "axios";

const url = `http://desafioonline.webmotors.com.br/api/OnlineChallenge/`;

const GetMake = (callback) => {
  return Axios.get(`${url}Make`).then((res) => {
    callback(res.data);
  });
};
const GetModel = (callback, makeId) => {
    return Axios.get(`${url}Model`, {
      params: {
        MakeID: makeId
      }
    }).then((res) => {
      callback(res.data);
    });
};
const GetVersion = (callback, modelId) => {
  return Axios.get(`${url}Version`, {
    params: {
      ModelID: modelId
    }
  }).then((res) => {
    callback(res.data);
  });
};

export default { GetMake, GetModel, GetVersion };
