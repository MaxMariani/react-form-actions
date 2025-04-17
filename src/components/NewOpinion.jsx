import { useActionState } from "react";

export function NewOpinion() {

  function shareOpinionAction(formData) {
    const title = formData.get('title');
    const body = formData.get('body');
    const username = formData.get('userName');

    let errors = [];

    if(title.trim().length < 5) {
      errors.push('Title must be at least 5 characters long');
    }

    if(body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Opinion must be between 10 and 300 characters long');
    }

    if(!username.trim()) {
      errors.push('Please provide your name.');
    }

  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={shareOpinionAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
