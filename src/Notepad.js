import React from "react";
import styled from "styled-components";
import NotesList from "./components/molecules/NotesList";
import AnimatedMessage from "./components/atoms/AnimatedMessage";
import Loader from "./components/atoms/Loader";
import Button from "./components/atoms/Button";
import WithLoader from "./components/atoms/WithLoader";
import AddIcon from "@material-ui/icons/Add";

const apiUrl = "https://my-json-server.typicode.com/eimuciu/data/notes";

class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], showingAlert: false };
    this.changeHandler = this.changeHandler.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.save = this.save.bind(this);
    this.zoomNote = this.zoomNote.bind(this);
    this.unZoomNote = this.unZoomNote.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(results => {
        const newResults = results.map(item => ({
          ...item,
          isOpen: false
        }));
        this.setState({
          ...this.state,
          items: newResults
        });
        this.props.changeLoadingStatus();
      });
  }

  changeHandler(event, item) {
    const indexOfItem = this.state.items.indexOf(item);
    const updatedItems = this.state.items.map((item, index) => {
      if (index === indexOfItem) {
        return {
          ...item,
          text: event.target.value
        };
      }
      return item;
    });
    this.setState(() => ({
      items: updatedItems
    }));
  }

  add() {
    let note = {
      text: "",
      color: "#6F90E8",
      isOpen: false
    };
    this.setState({ ...this.state, items: [note, ...this.state.items] });
    // fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(note)
    // })
    //   .then(response => response.json())
    //   .then(result =>
    //     this.setState({ ...this.state, items: [result, ...this.state.items] })
    //   );
  }

  remove(item) {
    if (item.id !== undefined) {
      fetch(`${apiUrl}/${item.id}`, {
        method: "DELETE"
      }).then(() => {
        this.deleteItem(item);
      });
    } else {
      this.deleteItem(item);
    }
  }

  deleteItem(item) {
    const index = this.state.items.indexOf(item);
    const filteredArray = this.state.items.filter((x, i) => i !== index);
    this.setState({ ...this.state, items: filteredArray });
  }

  changeColor(color, item) {
    const index = this.state.items.indexOf(item);
    const array = [...this.state.items];
    array[index].color = color;
    this.setState({ ...this.state, items: array });
  }

  zoomNote(item) {
    const index = this.state.items.indexOf(item);
    const array = this.state.items.map((item, ind) => {
      if (ind === index) {
        return {
          ...item,
          isOpen: true
        };
      }
      return item;
    });
    this.setState({ ...this.state, items: array });
  }

  unZoomNote(item) {
    const index = this.state.items.indexOf(item);
    const array = this.state.items.map((item, ind) => {
      if (ind === index) {
        return {
          ...item,
          isOpen: false
        };
      }
      return item;
    });
    this.setState({ ...this.state, items: array });
  }

  save(item) {
    this.setState({
      ...this.state,
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        showingAlert: false
      });
    }, 5000);
    fetch(`${apiUrl}/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    } else {
      return (
        <Container>
          <AnimatedMessage
            showMessage={this.state.showingAlert}
            message="Saved"
          />
          <Div>
            <h1 style={{ margin: "0px", padding: "5px 5px 10px 5px" }}>
              Notepad
            </h1>
          </Div>
          <NotepadArea>
            <NotesList
              onZoom={this.zoomNote}
              onSave={this.save}
              onChangeView={this.unZoomNote}
              onChangeColor={this.changeColor}
              onChange={this.changeHandler}
              items={this.state.items}
              onRemove={this.remove}
            />
            <AddNoteButton
              text={<AddIcon style={{ color: "green" }} />}
              onClick={this.add}
            />
          </NotepadArea>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  margin: 40px auto;
  width: 80%;
  background-color: rgb(221, 255, 200);
  border-radius: 5px;
  padding: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const NotepadArea = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border: 2px solid white;
  border-radius: 5px;
  padding: 35px 20px;
`;

const AddNoteButton = styled(Button)`
  border-radius: 5px;
  border: 1px solid green;
  background-color: white;
  position: absolute;
  top: 3px;
  right: 3px;
  &:hover {
    top: 1px;
    cursor: pointer;
    border: 2px solid green;
  }
`;

export default WithLoader(Notepad);
