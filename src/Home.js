import Card from "./Card";

function Home({users}){
   
 return (
      <Card
        txtcolor="black"
        maxWidth= "25rem"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="Bank Logo"/>)}
      />    
    );  
  }

  export default Home;