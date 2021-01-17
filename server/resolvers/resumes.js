const resumes = async () => {
  return {
    edges: [
      {
        node: {
          name: 'test',
          description: 'test'
        }
      }
    ]
  }
}

export {resumes as default}