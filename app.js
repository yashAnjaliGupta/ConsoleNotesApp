const yargs=require('yargs');
const notes = require('./notes')

// fs.appendFileSync('notes.txt'," i live in ---");

yargs.version('1.2.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title,argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: ()=>{
        notes.listNotes();
    }
});
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title);
    }
});
yargs.parse();