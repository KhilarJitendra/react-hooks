useEffect 

- empty array - one time run
- dependency changes - runs on dependency

- Clean Up runs based on condition 
  - first time
  - dependency chnages - clean up runs first - use effects runs  
  - component unmount (removed from DOM like {isLoggedIn && <ComponentA> </ComponentA> }) then clean up runs
  - no dependency changes so clean up runs
                                              
