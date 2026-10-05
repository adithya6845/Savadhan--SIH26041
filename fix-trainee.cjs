const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src').filter(f => f.endsWith('.js') || f.endsWith('.jsx'));
let changedFiles = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let orig = content;

    content = content.replace(/ANKIT_name/g, 'trainee_name');
    content = content.replace(/role:\s*['"]ANKIT['"]/g, "role: 'trainee'");
    content = content.replace(/role === ['"]ANKIT['"]/g, "role === 'trainee'");
    content = content.replace(/role == ['"]ANKIT['"]/g, "role == 'trainee'");
    content = content.replace(/ANKIT@savadhan\.demo/g, 'trainee@savadhan.demo');
    content = content.replace(/\/admin\/ANKITs/g, '/admin/trainees');
    content = content.replace(/AdminANKITs/g, 'AdminTrainees');
    content = content.replace(/CreateANKITModal/g, 'CreateTraineeModal');
    content = content.replace(/AdminANKITDetail/g, 'AdminTraineeDetail');
    content = content.replace(/ANKITs/g, 'Trainees'); 
    content = content.replace(/ANKIT/g, 'Trainee');
    
    if (content !== orig) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
    }
}
console.log(`Updated ${changedFiles} files`);
