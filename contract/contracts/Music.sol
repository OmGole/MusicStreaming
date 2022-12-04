pragma solidity >=0.7.0 <0.9.0;


contract Music {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    struct User {
        string userName;
        address userAddress;
    }

    struct Artist {
        string artistName;
        uint[] songsUploaded;
        address artistAddress;
    }
    
    struct Song{
        uint sID;
        uint genre;
        string name;
        string hash;
    }

    mapping (address => Artist) public artist ;
    mapping (address => User) public user;
    mapping (uint => Song) song;


    function userRegister(string memory _name) public payable {
        // require(bytes(user[msg.sender]).length == 0, "Already registered!");
        
        User memory newUser = User(_name,msg.sender);
        user[msg.sender] = newUser;
    }

      function artistRegister(string memory _name) public payable{
        // require(bytes(artist[msg.sender]).length == 0, "Already registered!");

        Artist memory newArtist = Artist(_name, new uint[](0), msg.sender);
        artist[msg.sender] = newArtist;
    }

    function userLogin() view public returns (User memory) {
        // require(bytes(artist[msg.sender]).length != 0, "No User Found, Please Register");
        return user[msg.sender];
    }

    function artistLogin() view public returns (Artist memory) {
        // require(bytes(artist[msg.sender]).length != 0, "No User Found, Please Register");
        return artist[msg.sender];
    }
}