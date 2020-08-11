import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import { JournalList, JournalListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import "../pages/style.css"


function Journal () {

  // Setting our component's initial state
  const [journal, setJournal] = useState ([])
  const [formObject, setFormObject] = useState({
    title: "",
    content: ""
    })

    // Load all journal and store them with setjournal
    useEffect(() => {
      loadJournal()
    }, [])
  
 // Loads all journal and sets them to journal
 function loadJournal() {
  API.getJournal()
    .then(res => 
      setJournal(res.data)
    )
    .catch(err => console.log(err));
    console.log("getting journal");
};

  // Deletes a journal from the database with a given id, then reloads journal from the db
  function deleteJournal(id) {
    API.deleteJournal(id)
      .then(res => loadJournal())
      .catch(err => console.log(err));
      console.log("DELETE journal");

  }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    console.log("UPDATING journal");
    setFormObject (value);
  };

  // When the form is submitted, use the API.savedJournal method to save the journal data
  // Then reload journal from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      API.saveJournal({
        title: formObject.title,
        content: formObject.content
      })
        .then(res => setFormObject({
          title: "",
          content: ""
        }))
        .catch(err => console.log(err));
        console.log("FORM SUBMIT journal");

    }
};
  return (

    // JOURNAL YOUR THOUGHTS HERE
<Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Whats on your mind..?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Journal Title (required)"
                value={formObject.title}
              />
              <TextArea
                onChange={handleInputChange}
                name="content"
                placeholder="Journaling Feild"
                value={formObject.content}

              />
              <FormBtn
                disabled={!(formObject.title && formObject.content)}
                onClick={handleFormSubmit}
              >
                Save
              </FormBtn>
            </form>
          </Col>


      {/* JOURNAL IS DISPLAYED HERE */}
          <Col size="md-6 sm-12">
          <Jumbotron>
              <h1>Saved Journal</h1>
            </Jumbotron>

            {journal.length ? (
                <JournalList>
                  {journal.map(journal => {
                    return (
                    <JournalListItem key={journal._id}>
                     
                     <Link to={"/journal/" + journal._id}>
                       <strong>
                         {journal.title} by {journal.content}
                       </strong>
                     </Link>

                     <DeleteBtn onClick={() => deleteJournal(journal._id)} />
                   </JournalListItem>
                  );
                })}
                </JournalList>
            ): (
            <h1 className="text-center">No Saved Journals</h1>
            )}

              </Col>
            </Row>
          </Container>
        );
      }
                    

export default Journal;
