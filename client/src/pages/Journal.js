import React, { useRef, useReducer} from "react";
import { Container, Row, Col } from "../components/Grid";
import { JournalList, JournalListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import "../pages/style.css"


function Journal () {
  const inputRef = useRef();
  const [journals, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length * Math.random(),
          title: action.title,
          content: action.content
        }
      ];
      // Bonus: Remove a todo from the list.
    case "remove":
      return state.filter((_, index) => {
        return index !== action.index;
      });
    default:
      return state;
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "add",
      title: inputRef.current.value,
      content: inputRef.current.value

    });
    inputRef.current.value = "";
  };


  return (

    // JOURNAL YOUR THOUGHTS HERE
<Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Whats on your mind..?</h1>
            </Jumbotron>
            <form onSubmit={handleSubmit}>
              <input
                className= "form-control"
                ref={inputRef}
                placeholder="Journal Title (required)"
              />
              <input
                className= "form-control"
                ref={inputRef}
                placeholder="Journaling Feild"

              />
              <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Journal
        </button>
            </form>
          </Col>


      {/* JOURNAL IS DISPLAYED HERE */}
          <Col size="md-6 sm-12">
          <Jumbotron>
              <h1>Saved Journal</h1>
            </Jumbotron>

            
                <JournalList>
                {journals.map((journal, index) => {
                    return (                    
                    <JournalListItem key={journal.id}>
                      {journal.title}{journal.content}


                         <button
                          className="btn btn-success mt-3 mb-5"
                          onClick={() => dispatch({ type: "remove", index })}
                        >
                          Delete Journal
                        </button>

                   </JournalListItem>
                    )
                })}
                </JournalList>
            

              </Col>
            </Row>
          </Container>
        );
      }
                    

export default Journal;
