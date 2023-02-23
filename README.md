<h1>Description</h1>
<p>Jotai is a state management library based around 'atoms'. 
Atoms store the state of primitive types 
(booleans, numbers, strings, objects, arrays, sets, maps, etc.), 
and their current state can be used and modified much like state in 
React's useState hook.</p>
<p>When creating atoms, an 'atom config' is what is actually returned and it refers to a store that holds the actual value. The atom config can be considered a handle that allows 
us to manipulate the actual state value in the store. Generally, I'll use 'atom config' and 'atom' interchangeably, but strictly speaking they aren't the same thing.</p>
<p>Jotai seeks to minimize re-renders by only causing re-renders to components that are 
directly dependent on an atom's state.</p>

<h1>Core Concepts</h1>
<p>Atoms are easily declared:</p>
<pre>
import { atom } from 'jotai';

const countAtom = atom(0);
</pre>

<p>and used:</p>
<pre>
import { useAtom } from 'jotai';
import { countAtom } from './some_file.js'

const CountLabel = () => {
    const [count, setCount] = useAtom(countAtom);

    return <>
        <button onClick={() => {setCount(count => { count + 1 })}}>Increment</button>
        <p>{count}</p>;
    </>;
};
</pre>
<p>In situations where an atom is only needed for read or write access, re-renders can be optimized by using the 'useAtomValue' or 'useSetAtom' hooks:</p>
<pre>
// Provides read-only access:
const count = useAtomValue(countAtom);

// Provides write-only access:
const setCount = useSetAtom(countAtom);
</pre>

<p>The atom() function can also be used to create derived atoms: atoms that reference the value of another atom. These derived atoms can be read-only, write-only, or readable and writable:</p>
<pre>
const countSquaredReadAtom = atom(
    // Receives a function to get the current atom value
    (get) => get(countAtom) * get(countAtom)
)

const countSquaredWriteAtom = atom(
  null, // 'null' for get function
  (get, set, update) => {
    set(countAtom, get(countAtom) * get(countAtom))
  }
)

const countSquaredReadWriteAtom = atom(
  (get) => get(countAtom) * get(countAtom), 
  (get, set, newCount) => {
    set(countAtom, newCount * newCount)
  }
)
</pre>
<p>Atoms can be created on demand, meaning we can dynamically create them:</p>
<pre>
// This function can be called arbitrarily while the application is running to 
// create a new atom:
const createAtom = (value) => {
    return atom(value);
}
</pre>
<p>This gives us the flexibility to create new atoms as data is fetched from a server, 
or when the user interacts with the application in a way that requires us to manage the 
state of this new, dynamic, data or interaction.</p>
<h2>Other Features</h2>
<ul>
    <li>atomWithStorage hook for persisting atom values in localStorage.</li>
    <li>useHydrateAtoms for SSR apps</li>
    <li>By default atoms support async reads and writes, but there are additional APIs for manually handling async reads and writes.</li>
    <li>Ability to create atoms that can be reset to their initial value.</li>
    <li>atomFamily API to create caches of atoms. Atoms are accessed by a key and are 
created if they don't already exist.</li>
    <li>Various built-in tools for debugging application state.</li>
</ul>

<h1>Ease of Use</h1>
<p>Jotai is very easy to use and can basically be used like a global 'useState': an atom is 
defined somewhere and can then be read/set in multiple places.</p>

<h1>Difficulties</h1>
<p>I didn't come across any real difficulties when using Jotai.</p>
<p>The biggest potential issue with Jotai is that its simple (but powerful) features mean that state can be managed in a huge number of arbitrary ways, which could create a mess of dependencies if not carefully managed. I think out of the box Jotai shines in applications with simple state (especially when compared to Contexts + useState for the same task), but would probably require some custom abstractions or enforced coding practices (or both) to limit atom access and modification if used on a larger project or team.</p>
