const repo = ()=>(()=>
  {
    function push(repo, branch, message, callback) {
      const db_def = {
        repo: repo,
        branch: branch,
        message: message,
      }
      fetch('/~api:push',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(db_def)
      })
      new Promise((resolve, reject) => {
        callback(resolve, reject);
      })
    }
  })()