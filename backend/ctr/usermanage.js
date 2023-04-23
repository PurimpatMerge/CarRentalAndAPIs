import express from "express";

export const addUser =  (req, res, next) => {
    console.log("adduser");
    return res.status(200).send("test add")
  };