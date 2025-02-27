const ApiRessourcesAdd = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Add an article</h1>
      <p>Page to add an article</p>
      <form className="flex flex-col items-center gap-y-6">
        <label className="flex gap-8">
          Title
          <input name="title" type="text" className="bg-slate-100" />
        </label>
        <label className="flex gap-8">
          Content
          <textarea name="content" className="bg-slate-100" />
        </label>
        <button type="submit">Add article</button>
      </form>
    </div>
  );
};

export default ApiRessourcesAdd;
