function foo() {
    console.log("foo")
    return 20;
}

function bar() {
    console.log("bar")
    return 10;
}

function tar() {
    console.log("tar")
    return 30;
}

function main() {
    let a = (foo(), bar(), tar());
    console.log(a);
}

main()