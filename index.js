function editDistance(s1, s2) {
    
    let table = [...Array(s1.length + 1).keys()]
        .map((rv, ri) => [...Array(s2.length + 1)]
        .map((v, i) => i + ri));
    
    let distanceVector = table.reduce((br, r, ri) => 
        r.reduce((b, v, i) => {
            if(ri && i)
            {
                const top = br[i];
                const topleft = br[i-1];
                const left = b[i-1];
                
                let value;
                
                if(s1[ri-1] == s2[i-1])
                    value = Math.min(left, topleft, top);
                else 
                    value = Math.min(top + 1, topleft + 1.5, left + 1) // weights for insert(1), change(1.5), delete(1)
                
                b[i] = value;
                return b;
                
            } else return b;
        }, r), table[0]);
        
    return distanceVector[s2.length];
}
    
  
