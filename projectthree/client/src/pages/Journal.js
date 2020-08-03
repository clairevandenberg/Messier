import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "../components/Grid";
import { JournalList, JournalListItem } from "../components/List";
// import { Link } from "react-router-dom";
// import DeleteBtn from "../components/DeleteBtn";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import "../pages/style.css"



function Journal () {
    
  // Setting our component's initial state
  const [journals, setJournals] = useState ([])
  const [formObject, setFormObject] = useState([])

    // Load all journals and store them with setjournals
    useEffect(() => {
      loadJournals()
    }, [])
  
 // Loads all journals and sets them to journals
 function loadJournals() {
  API.getJournals()
    .then(res => 
      setJournals(res.data)
    )
    .catch(err => console.log(err));
};

  // Deletes a journal from the database with a given id, then reloads journals from the db
  // function deleteJournal(id) {
  //   API.deleteJournal(id)
  //     .then(res => loadJournals())
  //     .catch(err => console.log(err));
  // }
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savedJournal method to save the journal data
  // Then reload journals from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      API.saveJournal({
        title: formObject.title,
        content: formObject.content
      })
        .then(res => loadJournals())
        .catch(err => console.log(err));
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
              />
              <TextArea
                onChange={handleInputChange}
                name="content"
                placeholder="Journaling Feild"
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
            {journals.length ? (
              <h1 className="text-center">No Saved Journals</h1>
              ) : (
                <JournalList>
                  {journals.map(journal => {
                  return (
                    <JournalListItem
                    title={journal.title}
                    content={journal.content}
                    />
                    );
                  })}
                </JournalList>
              )}
              </Col>
            </Row>
          </Container>
        );
      }
                    


export default Journal;
