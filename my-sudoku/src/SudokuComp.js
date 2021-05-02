import './App.css';
import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
function SudokuComp({property}) {
  // ***************************************
  var rows = property.flat();
  // ***************************************
  return (
    <div className="App">
      {/* <header className="header">Sudoku </header> */}
      <div className="App-header">
      <Table style={{width:'25vw',fontSize:'32px'}} striped bordered hover variant="dark">
        <tbody >
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=0 && idx<9)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=9 && idx<18)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=18 && idx<27)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=27 && idx<36)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=36 && idx<45)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
         {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=45 && idx<54)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=54 && idx<63)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=63 && idx<72)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        {
        <tr>
          {rows.map((i, idx)=>{
              // if (rows.indexOf(i)%9==0){
              if ((idx>=72 && idx<81)){
                return (
                      <td>{rows[idx]}</td>
                        )
              } 
          })}
        </tr>
        }
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default SudokuComp;
