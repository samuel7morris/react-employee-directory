import React from "react"
import TableBody from "./tablebody"

function Table ({headings, users, handleSort}) {
     return (
          <div className="mt-3">
               <table>
                    <thead>
                         <tr>
                              {headings.map(({name, width}) => {
                                   return (
                                      <th 
                                      className = "col-md-3"
                                      key = {name}
                                      onClick = {() => {
                                           handleSort(name.toLowerCase())
                                      }}
                                      style = {{width}}
                                      >
                                      {name}
                                 
                                      <span></span>     
                                      </th>  
                                   )
                              })}
                         </tr>
                    </thead>
                    <TableBody
                    users = {users}
                    ></TableBody>
               </table>
          </div>

     )
}

export default Table


  /* figure out how to style pointer on span  */