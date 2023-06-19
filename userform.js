function handleSubmit(event) {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
    
    // Access individual form fields
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    
    // Do something with the form data
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
  }