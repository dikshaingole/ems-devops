package com.example.ems.service;

import com.example.ems.model.Employee;
import com.example.ems.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> findAll() {
        return repository.findAll();
    }

    public Employee create(Employee e) {
        return repository.save(e);
    }

    public Employee update(Long id, Employee payload) {
        Employee existing = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found with id " + id));
        existing.setName(payload.getName());
        existing.setEmail(payload.getEmail());
        existing.setDepartment(payload.getDepartment());
        return repository.save(existing);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Employee getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found with id " + id));
    }
}
