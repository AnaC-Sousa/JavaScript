const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);

const [user, setUser] = useState({
  name: 'Ed',
  age: 25,
  posts: ['my first post', 'my lovely summer']
});

const increment = () => {
  setCount(count + 1);
  setRed(!isRed);
};
