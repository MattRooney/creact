var AllSkills = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(skill) {
    this.props.onUpdate(skill);
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleEdit() {
    console.log('you are in edit!');
  },

  render() {
    var skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill}
                 handleDelete={this.handleDelete.bind(this, skill.id)}
                 handleEdit={this.onUpdate} />
        </div>
      )
    });

    return (
      <div>
        {skills}
      </div>
    )
  }
});
