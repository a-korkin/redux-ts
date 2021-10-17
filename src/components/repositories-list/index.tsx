import React, { useState } from "react";
import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-typed-selector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState<string>("");
    const { searchRepositories } = useActions();
    const { data, loading, error } = useTypedSelector((state) => state.repositories);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
                { error && <h2>{error}</h2>}
                { loading && <h2>Loading...</h2>}
                { !error && !loading && 
                    <ol>
                        {
                            data.map(item => <li key={item}>{item}</li>)
                        }
                    </ol>
                }
            </form>
        </div>
    );
}

export default RepositoriesList;
